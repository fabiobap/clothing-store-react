import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collections-preview/collection-preview.component';
import '../../components/collections-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id}{...otherCollectionProps} />
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapToStateProps)(CollectionsOverview);