<script>
  import { Router, Route } from 'svelte-routing';
  
  import Header from './components/shell/Header.svelte';
  import NavBar from './components/shell/navbar/NavBar.svelte';
  import Footer from './components/shell/Footer.svelte';
  import ModalBackdrop from './components/shell/ModalBackdrop.svelte';

  import Home from './Home.svelte';
  import Tenant from './Tenant.svelte';
  import Directory from './Directory.svelte';
  import Deals from './Deals.svelte';
  import Events from './Events.svelte';
  import Jobs from './Jobs.svelte';
  import News from './News.svelte';
  import DealsEntry from './DealsEntry.svelte';
  import EventEntry from './EventEntry.svelte';
  import JobEntry from './JobEntry.svelte';
  import NewsEntry from './NewsEntry.svelte';
</script>

<Header />
<NavBar />

<main class="w-screen h-auto pb-24">
  <Router>
      <Route path="/" component={Home} />
      <Route path="/tenant" component={Tenant} />
      <Route path="/directory" component={Directory} />
      <Route path="/deals" component={Deals} />
      <Route path="/dealsentry" component={DealsEntry} />
      <Route path="/events" component={Events} />
      <Route path="/evententry" component={EventEntry} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/jobentry" component={JobEntry} />
      <Route path="/news" component={News} />
      <Route path="/newsentry" component={NewsEntry} />
  </Router>
</main>

<style>
  @import './styles.css';
</style>

<Footer />
<ModalBackdrop />