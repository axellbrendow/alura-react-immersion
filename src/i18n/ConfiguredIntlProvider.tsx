import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";

import BgWithSpinner from "components/core/BgWithSpinner";

import flattenMessages from "utils/flattenMessages";
import * as translations from "./translations";
import {
  DEFAULT_LANGUAGE,
  getUrlLang,
  getAppropriateLocale,
} from "./languages";

export const cache = createIntlCache();
export let intl = createIntl(
  { locale: DEFAULT_LANGUAGE.locale, messages: {} },
  cache
);
export let translate = intl.formatMessage;

const initialLocale = getAppropriateLocale();

const ConfiguredIntlProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    return history?.listen(update =>
      setLocale(getUrlLang(update.location.pathname))
    );
  }, [history, setLocale]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (locale) {
        const messages = flattenMessages(await translations.getOne(locale));
        document.documentElement.lang = locale;
        intl = createIntl({ locale, messages }, cache);
        translate = intl.formatMessage;
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    })();
  }, [locale]);

  return loading ? (
    <BgWithSpinner />
  ) : (
    <RawIntlProvider value={intl}>{children}</RawIntlProvider>
  );
};

ConfiguredIntlProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConfiguredIntlProvider;
