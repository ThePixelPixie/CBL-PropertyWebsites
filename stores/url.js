import { writable } from 'svelte/store';

export function createUrlStore(initialUrl) {
  const { subscribe, set } = writable(new URL(initialUrl));

  const updateUrl = (newUrl) => {
    set(new URL(newUrl, window.location.origin));
  };

  return {
    subscribe,
    set: updateUrl,
  };
}