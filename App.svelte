<script>
  import { onMount, setContext } from 'svelte';
  import { createUrlStore } from './stores/url';
  import { Router, Route } from 'svelte-routing';

  import Header from './components/shell/Header.svelte';
  import TabBar from './components/shell/navbar/TabBar.svelte';
  import Footer from './components/shell/Footer.svelte';
  import ModalBackdrop from './components/shell/ModalBackdrop.svelte';

  import Home from './Home.svelte';
  import Tenant from './Tenant.svelte';
  //import TenantAlt from './TenantAlt.svelte';
  import Directory from './Directory.svelte';
  
  // Initialize the URL store
  const urlStore = createUrlStore(window.location.href);
  setContext('APP', { url: urlStore });

  function handleLinkClick(e) {
    e.preventDefault();
    const href = e.target.href;
    history.pushState({}, '', href);
    urlStore.set(href); // Update the store with the new URL
  }

  function handleRouteChange(event) {
    urlStore.set(window.location.href);
    console.log('Route changed to:', event.detail.location);
  }
</script>

<Header {urlStore} />
<TabBar {urlStore} />

<Router {urlStore} on:routechange={handleRouteChange}>
  <Route path="/" component={Home} />
  <Route path="/tenant" component={Tenant} />
  <Route path="/directory" component={Directory} />
</Router>

<Footer {urlStore} />
<ModalBackdrop />

<style>
  @import './styles.css';
</style>