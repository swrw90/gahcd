import React from 'react';
import './photo-grid.css';

class PhotoGrid extends React.Component {
    render() {
        return (

            <div class="main-content">
                <div class="portfolio">
                    <div class="portfolio-item medium">one</div>
                    <div class="portfolio-item large two">two</div>
                    <div class="portfolio-item medium">three</div>
                    <div class="portfolio-item small">four</div>
                    <div class="portfolio-item tall">five</div>
                    <div class="portfolio-item wide">six</div>
                    <div class="portfolio-item wide">six</div>
                    <div class="portfolio-item medium">one</div>
                </div>
            </div>
        )
    }
}

export default PhotoGrid;