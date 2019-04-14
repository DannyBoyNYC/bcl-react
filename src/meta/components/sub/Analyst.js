import React, { Component } from 'react';
import { NONAME } from 'dns';

class Analyst extends Component {
  constructor(props) {
    super(props);
    this.analystPopover = this.analystPopover.bind(this);
  }

  analystPopover(event) {
    event.preventDefault();
    const popover = this.refs.popover;
    const popLink = this.refs.popLink;
    const coords = popLink.getBoundingClientRect().height;
    popover.style.top = coords + 'px';
    popover.classList.toggle('show');
  }

  render() {
    const data = this.props;
    return (
      <li
        style={{ position: 'relative' }}
        className="analyst"
        rel="author"
        itemScope=""
        itemType="http://schema.org/Person"
        itemProp="author"
      >
        <a
          className="analyst-link"
          href="#single"
          ref="popLink"
          onClick={this.analystPopover}
        >
          {data.analyst.image ? (
            <img
              className="analyst-photo"
              src={data.analyst.image}
              alt="analyst"
            />
          ) : (
            <div className="analyst-photo">HH</div>
          )}

          <div className="analyst-deets">
            <span itemProp="name">{data.analyst.name}</span>
            <span itemProp="affiliation">{data.analyst.affiliation}</span>
          </div>
        </a>
        {/* the hidden popover */}
        <div className="popover" ref="popover">
          <a className="close-popover" href="#00">
            ✖︎
          </a>
          <div className="popover__content">
            <div>
              {data.analyst.name}
              <span className="popover-credentials">
                {data.analyst.affiliation}
              </span>
              <span className="popover-credentials">
                {data.analyst.department}
              </span>
            </div>
            <ul>
              <li>
                <svg className="icn">
                  <title>Phone number</title>
                  <use xlinkHref="#icon-phone" />
                </svg>
                <a href="#0">{data.analyst.tel}</a>
              </li>
              <li>
                <svg className="icn">
                  <title>Phone number</title>
                  <use xlinkHref="#icon-person" />
                </svg>
                <a href="#0">Analyst's Page</a>
              </li>
              <li>
                <svg className="icn">
                  <title>Email</title>
                  <use xlinkHref="#icon-email" />
                </svg>
                <a href="#0">{data.analyst.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Analyst;
