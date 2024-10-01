import { ROUTER_IDS } from './router-ids';

const HOME_PATH = '/';

function getPath(subPath = '') {
  return HOME_PATH + subPath;
}

export const ROUTER_PATHS = {
  [ROUTER_IDS.home]: getPath('home'),
  [ROUTER_IDS.calendar]: getPath('calendar'),
  [ROUTER_IDS.notFound]: getPath('not_found'),
};
