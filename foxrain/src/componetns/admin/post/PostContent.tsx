import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../../assets/admin';

interface Props {
  // title: string;
  // content: string;
  reportCtn?: number;
}

const PostContent: FC<Props> = props => {
  const { reportCtn } = props;

  const report = useMemo(() => {
    if (reportCtn)
      return (
        <>
          <S.ReportCtn>{reportCtn}개</S.ReportCtn>
          <S.ReportIcon src={reportIcon} />
        </>
      );
  }, [reportCtn]);

  return (
    <S.PostContent>
      <S.PostTitle>요즘따라 너무 우울해 ㅠ 근데 우울하려고 우울한건 아니였어.</S.PostTitle>
      <S.PostText>
        일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건
        아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러
        우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건
        아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.일부러
        우울한건 아니라고.일부러 우울한건 아니라고.일부러 우울한건 아니라고.
      </S.PostText>
      {report}
    </S.PostContent>
  );
};

export default PostContent;
