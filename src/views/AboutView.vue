<script setup lang="ts">
import { site } from '@/data/site'
</script>

<template>
  <article class="page">
    <div class="wrap">
      <header class="page-head">
        <p class="kicker">About</p>
        <h1>The software practice, kept on its own.</h1>
        <p class="lede">
          KBCoding is the name we use when the job is to make software. The business is often
          shortened to KBC. This page is about that software work, and only that.
        </p>
      </header>

      <div class="about-body">
        <section>
          <h2>The business</h2>
          <p>
            KBC is the business. KBCoding is the software development side of it: the practice used
            to design, build, and look after the applications and tools we create. A product may
            stand on its own, or the software may sit behind something else we run. Either way, the
            software is built under this name.
          </p>
          <p>
            The studio is run by Kevin Bacon and is based in {{ site.location }}. The work is
            practical. We take a piece of software from an idea through something that can be
            shipped, then keep it understandable enough to change later.
          </p>
        </section>

        <section>
          <h2>The kind of software</h2>
          <p>
            That includes web applications, mobile apps, backend services, and the smaller tools
            that sit beside a product. Some of it is customer-facing. Some of it is the system a
            product depends on: accounts, data, and the paths between them.
          </p>
          <p>
            We do not publish a portfolio on this site. Individual products, when they have a public
            face, live on their own. This website is the company, not a catalog.
          </p>
        </section>

        <section>
          <h2>Other names</h2>
          <p>
            We also do business under other names. Those names are separate lines of work. They are
            not products of this website, and this website does not speak for them. If you need one
            of those businesses, look for its own site.
          </p>
        </section>

        <section>
          <h2>This website</h2>
          <p>
            The pages here introduce KBCoding and set the rules for using the site. The
            <RouterLink to="/terms">terms of use</RouterLink>
            and
            <RouterLink to="/privacy">privacy policy</RouterLink>
            apply to kbcoding.com. Software we publish may carry its own terms.
          </p>
          <p>
            Questions about the studio can go to
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
          </p>
        </section>
      </div>

      <p class="about-aside">
        KBCoding builds software. The other business names we use stay outside this site.
      </p>
    </div>
  </article>
</template>
