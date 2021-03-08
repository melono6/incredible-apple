import React, { useEffect } from "react";
import styleNames from "../../utils/style-names";
import styles from "./AlgoliaBlock.module.scss";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';

function Hit(props) {
	return (
	  <div>
      {JSON.stringify(props)}
		</div>
	);
}

export const AlgoliaBlock = ( {section} ) => {
  const { algoliaAppId, algoliaApiKey, algoliaIndexName } = section;

  const searchClient = algoliasearch(
    algoliaAppId,
    algoliaApiKey,
  );

  return (
    <div>
      <div className="ais-InstantSearch">
        <InstantSearch indexName={algoliaIndexName} searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

export default AlgoliaBlock;
