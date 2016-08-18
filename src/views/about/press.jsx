import React from 'react';
import articles from './articles.json';
import PressItem from '../../components/pressitem/pressitem.jsx';

var PressSection = React.createClass({
    render: function () {
        return (
            <div className="content-section" id="press-section">
                <div className="content-section-title">
                    Press
                </div>
                <div className="content-section-description">
                    Read what people are saying about ScratchJr.
                </div>
                {articles.map((article, index) => {
                    return (
                        <PressItem
                            key={index}
                            title={article.title}
                            url={article.url}
                            source={article.source}
                            dateString={article.dateString}
                        />
                    );
                })}
            </div>
        );
    }
});

module.exports = PressSection;
