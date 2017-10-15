import verbToBe from './verbToBe';

const verbs = {
  'tobe': verbToBe,
};

const switchVerbs = (verbs = {}) => defaultVerb => key => {
  if (key in verbs) {
    return verbs[key];
  }
  return defaultVerb;
};

export class VerbStore {
  getVerbData(verbKey) {
    return switchVerbs(verbs)(verbToBe)(verbKey);
  }
}