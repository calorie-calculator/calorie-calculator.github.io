import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseGoBackButton from 'shared/BaseGoBackButton';
import BaseMarkdownConverter from 'shared/BaseMarkdownConverter';
import { I18nKeys } from 'shared/i18n-keys';
import { RoutePath } from 'shared/models';

export default function WeightGainGuide() {
  const { t, i18n } = useTranslation();
  const url = `${process.env.PUBLIC_URL}/docs/how-to-gain-weight-${i18n.resolvedLanguage}.md`;

  return (
    <div className="width-container">
      <BaseGoBackButton to={RoutePath.Results} titleOverride={t(I18nKeys.GoBackToResults)} />
      <BaseMarkdownConverter url={url} />
    </div>
  );
}
