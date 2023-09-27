import {and, between, helpers, or} from "@vuelidate/validators";

export const domain_pattern = /^([a-z0-9.-]+\.)+[a-z0-9-]+$/i;
export const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const base64 = helpers.regex(/^[0-9a-zA-Z+/][0-9a-zA-Z+/\s]*(=\s*){0,3}$/);

export const trailingDot = helpers.regex(/[.]$/);
export const hex = helpers.regex(/^([0-9a-fA-F]\s*)*[0-9a-fA-F]$/);
export const trimBegin = helpers.regex(/^[^\s]/);
export const trimEnd = helpers.regex(/[^\s]$/);
export const trim = and(trimBegin, trimEnd);
// from https://stackoverflow.com/a/17871737/6867099, without the '%' and '.' parts
export const ip6Address = helpers.regex(/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/);
// from https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch08s16.html, adding subnet
export const ip4AddressOrSubnet = helpers.regex(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\/(3[0-2]|[12]?[0-9]))?$/);

// from https://stackoverflow.com/a/17871737/6867099, without the '%' and '.' parts, adding subnet
export const ip6AddressOrSubnet = helpers.regex(/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))([/](12[0-8]|1[01][0-9]|[1-9]?[0-9]))?$/);

export const ipAddressOrSubnet = or(ip4AddressOrSubnet, ip6AddressOrSubnet);

export const MAX8 = 255;
export const int8 = between(0, MAX8);

export const MAX16 = 65535;
export const int16 = between(0, MAX16);

export const txtToken = helpers.regex(/^".*"$/);

export const hostname1 = helpers.regex(/^((([a-zA-Z0-9-]+\.?)+)|\.)$/);
export const hostname2 = helpers.regex(/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}))[.]?$/);
// Allow for root label only, see RFC 2052
export const hostname3 = helpers.regex(/^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))?[.]?$/);
