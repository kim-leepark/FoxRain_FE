import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/admin';

interface Props {
  title: string;
  content: string;
  isAdmin: boolean;
  reportCnt?: number;
}

const PostContent: FC<Props> = props => {
  const { title, content, reportCnt, isAdmin } = props;

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
    <S.PostContent border={isAdmin}>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostText>{content}</S.PostText>
      {report}
    </S.PostContent>
  );
};

export default PostContent;
