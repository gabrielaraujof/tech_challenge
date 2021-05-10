import React from 'react';

import S from './Dash.module.css';
import D from '../../songData.json';

const Dash: React.FC = () => {
  return (
    <div className={S.ScrollContainer}>
      <div
        role="table"
        aria-label="Semantic Elements"
        aria-describedby="semantic_elements_table_desc"
        aria-rowcount={81}
      >
        <div role="rowgroup">
          <div role="row">
            <span role="columnheader" aria-sort="none">
              ARIA Role
            </span>
            <span role="columnheader" aria-sort="none">
              Semantic Element
            </span>
          </div>
        </div>
        <div role="rowgroup" className={S.Grid}>
          {D.map((song, index) => (
            <div
              role="row"
              aria-rowindex={11}
              className={`
                ${S.GridRow}
                ${index === 0 ? S.GridRow_First : ''}
                ${index === D.length - 1 ? S.GridRow_Last : ''}
              `}
            >
              <span role="cell" className={`${S.GridRow_Item} ${S.SongName}`}>
                {song.song}
              </span>
              <span role="cell" className={`${S.GridRow_Item} ${S.Artist}`}>
                {song.artist}
              </span>
              <span role="cell" className={`${S.GridRow_Item} ${S.Release}`}>
                {song.songReleaseDate}
              </span>
              <span role="cell" className={`${S.GridRow_Item} ${S.PlayCount}`}>
                {song.playCount}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricA}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricB}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricC}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricD}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricE}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricF}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricG}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricH}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricI}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricJ}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricK}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricL}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricM}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricN}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricO}
              </span>
              <span role="cell" className={S.GridRow_Item}>
                {song.metricP}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dash;
