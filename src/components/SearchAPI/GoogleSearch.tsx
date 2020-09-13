import { Pagination } from "antd";
import React, { Fragment } from "react";

type searchResultProps = {
  searchResult: {
    items: [
      {
        link: string;
        htmlSnippet: string;
        title: string;
        pagemap: {
          cse_thumbnail: [
            {
              src: string;
              width: string;
              height: string;
            }
          ];
        };
      }
    ];
    queries: {
      nextPage: [
        {
          startIndex: number;
          totalResults: string;
        }
      ];
    };
    searchInformation: {
      formattedTotalResults: string;
    };
  };
  onChangePage: (page: number, pageSize: number | undefined) => void
};

function GoogleSearch({ searchResult, onChangePage }: searchResultProps) {
  return (
    <Fragment>
      <div>
        <p>
          검색 결과 수: {searchResult?.searchInformation.formattedTotalResults}{" "}
          건
        </p>
      </div>
      {searchResult?.items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          rel="noreferrer noopener"
          target="_blank"
        >
          <div>
            {item.pagemap ? (
              item.pagemap.cse_thumbnail ? (
                <div>
                  <img
                    src={item.pagemap.cse_thumbnail[0].src}
                    style={{
                      width: `${item.pagemap.cse_thumbnail[0].width}px`,
                      height: `${item.pagemap.cse_thumbnail[0].height}px`,
                    }}
                    alt="linkThmb"
                  />
                </div>
              ) : null
            ) : null}
            <div>
              {/* title */}
              <div>
                <h1>{item.title}</h1>
              </div>
              {/* snnipet */}
              <div>
                <pre>{item.htmlSnippet}</pre>
              </div>
            </div>
          </div>
        </a>
      ))}
      <Pagination
          total={parseInt(searchResult?.queries.nextPage[0].totalResults)}
          defaultCurrent={1}
          onChange={onChangePage}
          showSizeChanger={false}
          showLessItems={true}
          // showQuickJumper={true}
          // hideOnSinglePage={true}
          responsive={false}
        />
    </Fragment>
  );
}

export default GoogleSearch;
