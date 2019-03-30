import React, { Component } from 'react';
import Aside from './Aside';
import AsideAttachment from './AsideAttachment';
import AsidePull from './AsidePull';
import Paragraph from './Paragraph';
import ParagraphFootnote from './ParagraphFootnote';
import Table from './Table';
import TableBig from './TableBig';
import Header2 from './Header2';
import Header3 from './Header3';
import Header3figure from './Header3figure';
import Header4 from './Header4';
import Header6 from './Header6';
import Multimedia from './Multimedia';
import MultimediaVideo from './MultimediaVideo';
import PopableTable from './PopableTable';
import ListUnordered from './ListUnordered';
import ListOrdered from './ListOrdered';
import Image from './Image';
import Caption from './Caption';
import CaptionSource from './CaptionSource';
import Blockquote from './Blockquote';
import SideBySide from './SideBySide';
import Quicktake from './Quicktake';
import ChapterLinks from './ChapterLinks';
import ChapterTextLinks from './ChapterTextLinks';
import MultipartList from './MultipartList';
import DisclosuresBottom from './DisclosuresBottom';
import SVGSymbols from './SVGSymbols';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Table />
        <Header3 />
        <Paragraph />
        <Header4 />
        <Multimedia />
        <Header4 />
        <MultimediaVideo />
        <PopableTable />
        <Header2 />
        <Paragraph />
        <TableBig />
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
        <AsidePull />
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
        <ChapterLinks />
        <ChapterTextLinks />
        <MultipartList />
        <DisclosuresBottom />
      </div>
    );
  }
}

export default App;
