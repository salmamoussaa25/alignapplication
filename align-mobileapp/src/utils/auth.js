const accountKey = 'align_saved_account';
const userKey = 'align_current_user';

export const getSavedAccount = () => {
  const raw = localStorage.getItem(accountKey);
  if (raw) {
    return JSON.parse(raw);
  }

  return {
    name: 'Sara Adel',
    email: 'sara@align.app',
    password: '123456'
  };
};

export const saveAccount = (account) => {
  localStorage.setItem(accountKey, JSON.stringify(account));
};

export const saveUser = (user) => {
  localStorage.setItem(userKey, JSON.stringify(user));
};

export const getUser = () => {
  const raw = localStorage.getItem(userKey);
  return raw ? JSON.parse(raw) : null;
};

export const clearUser = () => {
  localStorage.removeItem(userKey);
};
