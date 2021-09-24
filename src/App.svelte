<script>
    import Router from 'svelte-spa-router';
    import MenuContent from "./components/menuContent.svelte"
    import MenuDrawer from "./components/menuDrawer.svelte"
    import Footer from "./components/footer.svelte"
    import Home from "./views/home.svelte";
    import Cart from "./views/cart.svelte";
    import Products from "./views/products.svelte";
  </script>

<div class="min-h-[100vh] rounded-lg shadow bg-base-200 drawer h-52">
  <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
  <MenuDrawer />
  <div class="flex flex-col drawer-content h-full bg-base-100">
    <MenuContent/>
    <div class="flex-1">
      <Router routes={{
        '/': Home,
        '/dist/Products': Products,
        '/dist/Cart' : Cart,
      }} />
    </div>
  </div>
</div>
<Footer/>

