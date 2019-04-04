import React, { Component } from "react";

import Aside from "./components/Aside";
import AsideAttachment from "./components/AsideAttachment";
import AsidePull from "./components/AsidePull";
import Paragraph from "./components/Paragraph";
import ParagraphFootnote from "./components/ParagraphFootnote";
import Table from "./components/Table";
import TableBig from "./components/TableBig";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header3figure from "./components/Header3figure";
import Header4 from "./components/Header4";
import Header6 from "./components/Header6";
import Multimedia from "./components/Multimedia";
import MultimediaVideo from "./components/MultimediaVideo";
import PopableTable from "./components/PopableTable";
import ListUnordered from "./components/ListUnordered";
import ListOrdered from "./components/ListOrdered";
import Image from "./components/Image";
import Caption from "./components/Caption";
import CaptionSource from "./components/CaptionSource";
import Blockquote from "./components/Blockquote";
import SideBySide from "./components/SideBySide";
import Quicktake from "./components/Quicktake";
import ChapterLinks from "./components/ChapterLinks";
import ChapterTextLinks from "./components/ChapterTextLinks";
import MultipartList from "./components/MultipartList";
import DisclosuresBottom from "./components/DisclosuresBottom";

import EqDataTable from "./components/EqDataTable";

class Body extends Component {
  render() {
    return (
      <>
        {/* <Aside /> */}
        <Paragraph />
        <Paragraph />
        <Paragraph />
        {/* <Table /> */}
        <Header3 />
        <Paragraph />
        {/* <Header4 /> */}
        {/* <Multimedia /> */}
        {/* <Header4 /> */}
        {/* <MultimediaVideo /> */}
        {/* <PopableTable /> */}
        <Header2 />
        <Paragraph />
        {/* <TableBig /> */}
        <Header4 />
        <Paragraph />
        <AsideAttachment />
        <Paragraph />
        <ListUnordered />
        <ListOrdered />
        <Header3figure />
        <Image />
        <Caption />
        <CaptionSource />
        <Paragraph />
        <Header3figure />
        <Image />
        <Caption />
        <CaptionSource />
        <Header6 />
        {/* <AsidePull /> */}
        <Paragraph />
        <AsidePull />
        <Paragraph />
        <ParagraphFootnote />
        <Blockquote />
        <Paragraph />
        <SideBySide />
        <Paragraph />
        <Header4 />
        <Paragraph />
        <Quicktake />
        <Paragraph />
        <EqDataTable />
        {/* <ChapterLinks /> */}
        {/* <ChapterTextLinks /> */}
        {/* <MultipartList /> */}
        <DisclosuresBottom />
      </>
    );
  }
}

export default Body;
