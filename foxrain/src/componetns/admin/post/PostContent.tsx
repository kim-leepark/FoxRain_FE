import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../../assets/admin';

interface Props {
  title: string;
  content: string;
  reportCtn?: number;
}

const PostContent: FC<Props> = props => {
  const { title, content, reportCtn } = props;

  const report = useMemo(() => {
    if (reportCtn)
      return (
        <S.ReportLine>
          <S.ReportCtn>{reportCtn}개</S.ReportCtn>
          <S.ReportIcon src={reportIcon} />
        </S.ReportLine>
      );
  }, [reportCtn]);

  return (
    <S.PostContent>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostText>{content}</S.PostText>
      {report}
    </S.PostContent>
  );
};

export default PostContent;
