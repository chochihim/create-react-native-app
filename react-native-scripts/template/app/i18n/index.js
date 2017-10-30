import { Text } from 'react-native';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/zh';
import zh from 'react-intl/locale-data/zh';

import translations from './locales';

addLocaleData([...zh]);

const mapStateToProps = state => ({
    locale: state.app.locale,
    key: state.app.locale,
    messages: translations[state.app.locale],
    textComponent: Text,
});

export default connect(mapStateToProps)(IntlProvider);
