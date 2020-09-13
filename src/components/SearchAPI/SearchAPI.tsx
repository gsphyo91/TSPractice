import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "./SearchAPI.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AxiosResponse } from "axios";
import _ from "lodash";
import { searchAPI } from "../../apis/search";
import GoogleSearch from "./GoogleSearch";

type Keyword = {
  engine: string;
  keyword: string;
};

type SearchResult = {
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

function SearchAPI() {
  const [searchValue, setSearchValue] = useState<Keyword>({
    engine: "",
    keyword: "",
  });
  const [searchResult, setSearchResult] = useState<SearchResult>();

  const onSearch = (values: Keyword) => {
    setSearchValue(values);
    getGoogleSearch(values.keyword);
  };

  const getGoogleSearch = async (keyword: string, start: number = 1) => {
    try {
      const { data }: AxiosResponse = await searchAPI.google(keyword, start);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // const getNaverSearch = async (keyword: string, start: number = 1) => {
  //   try {
  //     const { data }: AxiosResponse = await searchAPI.naver(keyword, start);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.message);
  //   }
  // }

  const onChangePage = (page: number, pageSize: number | undefined) => {
    console.log(page, pageSize);
    getGoogleSearch(searchValue.keyword, page + 1);
  };

  useEffect(() => {
    // getSearchResult();
    // getNaverSearch('마스크');
    // console.log(searchResult.data);
  }, []);
  return (
    <div className="container">
      <h1>Search API</h1>
      <Form layout="inline" onFinish={onSearch}>
        <Form.Item name="engine" initialValue="google">
          <Select defaultValue="google">
            <Select.Option value="google">Google</Select.Option>
            {/* <Select.Option value="naver">Naver</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item
          label="Keyword"
          name="keyword"
          rules={[
            {
              required: true,
              message: "키워드를 입력하세요.",
            },
          ]}
        >
          <Input placeholder="Google Search" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            <AiOutlineSearch />
          </Button>
        </Form.Item>
      </Form>
      {_.isEmpty(searchResult) ? (
        <p>결과 없음</p>
      ) : searchResult ? (
        <GoogleSearch searchResult={searchResult} onChangePage={onChangePage} />
      ) : null}
    </div>
  );
}

export default SearchAPI;
