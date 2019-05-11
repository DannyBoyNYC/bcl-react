import React, { Component } from 'react';

import Aside from './components/Aside';
import AsideAttachment from './components/AsideAttachment';
import AsidePull from './components/AsidePull';
import Paragraph from './components/Paragraph';
import ParagraphFootnote from './components/ParagraphFootnote';
import TableImage from './components/TableImage';
import TableBig from './components/TableBig';
import EqSingleCompanyDataTable from './components/EqSingleCompanyDataTable';
import EqMultiCompanyDataTable from './components/EqMultiCompanyDataTable';
import EqMultiSectorDataTable from './components/EqMultiSectorDataTable';
import EqPageTwo from './components/EqPageTwo';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Header4 from './components/Header4';
import Header6 from './components/Header6';
import MultimediaAudio from './components/MultimediaAudio';
import MultimediaAudioNoautoplay from './components/MultimediaAudioNoautoplay';
import MultimediaVideo from './components/MultimediaVideo';

import ListUnordered from './components/ListUnordered';
import ListOrdered from './components/ListOrdered';
import ImageSingle from './components/ImageSingle';
import Caption from './components/Caption';
import CaptionSource from './components/CaptionSource';
import Blockquote from './components/Blockquote';
import SideBySide from './components/SideBySide';
import Quicktake from './components/Quicktake';
import ChapterLinks from './components/ChapterLinks';
import ChapterTextLinks from './components/ChapterTextLinks';
import MultipartList from './components/MultipartList';
import DisclosuresBottom from './components/DisclosuresBottom';
// testing overlay popable
import FigureSingle from './components/FigureSingle';
import FigureFullSize from './components/FigureFullSize';

class Body extends Component {
  constructor() {
    super();
    this.audioAutoplay = this.audioAutoplay.bind(this);
    this.audioStatus = 'boo';
  }
  componentDidMount() {
    this.audioAutoplay();
  }

  audioAutoplay() {
    var el = document.querySelector('audio');
    // console.log(el);
    var promise = el.play();
    if (promise !== undefined) {
      promise
        .then(_ => {
          console.log('MultimediaAudio.js: Autoplay started!');
          this.audioStatus = 'and autoplay has started.';
        })
        .catch(error => {
          console.log('MultimediaAudio.js: Autoplay was prevented.');
          this.audioStatus = 'and autoplay was prevented.';
        });
    }
  }

  render() {
    const data = this.props.data;
    const hashtag = data.hashtag === '#multisector';
    const autoPlay = window.location.search.substr(1);
    return (
      <>
        {/* <Aside /> */}
        {autoPlay ? (
          <MultimediaAudio status={this.audioStatus} />
        ) : (
          <MultimediaAudioNoautoplay status={this.audioStatus} />
        )}
        <Paragraph />
        <Paragraph />
        <FigureSingle />
        <Paragraph />
        <Paragraph />
        {/* <EqPageTwo /> */}
        <Paragraph />
        <Paragraph />
        {/* <TableImage /> */}
        {hashtag ? <EqMultiSectorDataTable /> : <EqMultiCompanyDataTable />}
        <EqSingleCompanyDataTable />
        <Header3 />
        <Paragraph />
        {/* <Header4 /> */}
        {/* <Header4 /> */}
        {/* <MultimediaVideo /> */}
        <Header2 />
        <Paragraph />
        {/* <TableBig /> */}
        <Header4 />
        <Paragraph />
        <AsideAttachment />
        <Paragraph />
        {/* <ListUnordered /> */}
        {/* <ListOrdered /> */}
        <Paragraph />
        <ImageSingle />
        <Header6 />
        <Paragraph />
        <AsidePull />
        <Paragraph />
        <ParagraphFootnote />
        <Blockquote />
        <Paragraph />
        {/* <SideBySide /> */}
        <Paragraph />
        <Header4 />
        <Paragraph />
        {/* <Quicktake /> */}
        <Paragraph />
        {/* <EqMultiCompanyDataTable /> */}
        {/* <ChapterLinks /> */}
        {/* <ChapterTextLinks /> */}
        <MultipartList />
        <DisclosuresBottom />
      </>
    );
  }
}

export default Body;
