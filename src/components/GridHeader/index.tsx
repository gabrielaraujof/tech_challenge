import React from 'react';

import S from './GridHeader.module.css';

enum SortOrder {
  none = 'none',
  asc = 'ascending',
  desc = 'descending',
}

enum HeaderSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xlg = 'xlg',
}

const sizesMap = {
  [HeaderSize.sm]: S.Button___Small,
  [HeaderSize.md]: S.Button___Medium,
  [HeaderSize.lg]: S.Button___Large,
  [HeaderSize.xlg]: S.Button___ExtraLarge,
};

interface GridHeaderProps {
  label: string;
  ordered?: boolean;
  size?: keyof typeof HeaderSize;
  onClick?: () => unknown;
}

const GridHeader: React.FC<GridHeaderProps> = ({
  label,
  ordered = false,
  size = HeaderSize.sm,
  onClick,
}) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span
      role="columnheader"
      aria-sort={ordered ? SortOrder.desc : SortOrder.none}
    >
      <button
        type="button"
        onClick={onClickHandler}
        className={`${S.Button} ${sizesMap[size]}`}
      >
        {label} {ordered ? String.fromCharCode(9662) : ''}
      </button>
    </span>
  );
};

export default GridHeader;
