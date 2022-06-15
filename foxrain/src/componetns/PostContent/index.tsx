import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/admin';

interface Props {
  title: string;
  content: string;
  isAdmin: boolean;
  id?: number;
  reportCnt?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PostContent: FC<Props> = props => {
  const { title, content, reportCnt, isAdmin, onClick, id } = props;

  const report = useMemo(() => {
    if (reportCnt)
      return (
        <S.ReportLine>
          <S.ReportCtn>{reportCnt}개</S.ReportCtn>
          <S.ReportIcon src={reportIcon} />
        </S.ReportLine>
      );
  }, [reportCnt]);

  return (
    <S.PostContent border={isAdmin} onClick={onClick} id={String(id)}>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostText>{content}</S.PostText>
      {report}
    </S.PostContent>
  );
};

export default PostContent;
