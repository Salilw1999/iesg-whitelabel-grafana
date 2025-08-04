import { css } from '@emotion/css';

import { GrafanaTheme2 } from '@grafana/data';
import { t } from '@grafana/i18n';
import { Drawer, useStyles2, Text } from '@grafana/ui';
import { DEFAULT_FEED_URL } from 'app/plugins/panel/news/constants';
import grotNewsSvg from 'img/grot-news.svg';

import { NewsWrapper } from './NewsWrapper';

interface NewsContainerProps {
  className?: string;
  onClose: () => void;
}

const getStyles = (theme: GrafanaTheme2) => {
  return {
    title: css({
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      gap: theme.spacing(2),
    }),
    grot: css({
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: theme.spacing(2, 0),

      img: {
        width: `75px`,
        height: `75px`,
      },
    }),
  };
};
