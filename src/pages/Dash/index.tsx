import React from 'react';

import S from './Dash.module.css';
import D from '../../songData.json';
import GridHeader from '../../components/GridHeader';

function* charRange(start: string, end?: string) {
  let startCharCode = start.charCodeAt(0);
  const endCharCode = end && end.charCodeAt(0);
  while (endCharCode && startCharCode <= endCharCode) {
    yield String.fromCharCode(startCharCode);
    startCharCode += 1;
  }
}

const Dash: React.FC = () => {
  return (
    <div className={S.ScrollContainer}>
      <div role="table" aria-label="Semantic Elements" aria-rowcount={D.length}>
        <div role="rowgroup">
          <div role="row" className={S.GridRow}>
            <GridHeader size="xlg" label="Song" />
            <GridHeader size="lg" label="Artist" />
            <GridHeader size="md" label="Release" />
            <GridHeader size="md" label="PlayCount" />
            {Array.from(charRange('a', 'p')).map(letter => (
              <GridHeader label={letter.toUpperCase()} />
            ))}
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
