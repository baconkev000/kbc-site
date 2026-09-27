<script setup lang="ts">
import { site } from '@/data/site'

const sections = [
  { id: 'agreement', title: 'Agreement' },
  { id: 'the-site', title: 'The site' },
  { id: 'use', title: 'Acceptable use' },
  { id: 'ip', title: 'Intellectual property' },
  { id: 'no-relationship', title: 'No client relationship' },
  { id: 'links', title: 'Other sites' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'liability', title: 'Liability' },
  { id: 'law', title: 'Governing law' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
]
</script>

<template>
  <article class="page">
    <div class="wrap">
      <header class="page-head">
        <p class="kicker">Legal</p>
        <h1>Terms of Use</h1>
        <p class="lede">
          These terms cover your use of the {{ site.name }} website at {{ site.url }}. They do not,
          by themselves, cover software products we publish elsewhere. Those products may have their
          own terms.
        </p>
        <p class="updated">Effective {{ site.updated }}</p>
      </header>

      <div class="legal-grid">
        <nav class="legal-nav" aria-label="On this page">
          <ol>
            <li v-for="section in sections" :key="section.id">
              <a :href="`#${section.id}`">{{ section.title }}</a>
            </li>
          </ol>
        </nav>

        <div class="prose">
          <section id="agreement">
            <h2>Agreement</h2>
            <p>
              By using this website, you agree to these terms. If you do not agree, do not use the
              site. “We,” “us,” and “our” mean {{ site.legalName }}. “You” means the person visiting
              the site.
            </p>
          </section>

          <section id="the-site">
            <h2>The site</h2>
            <p>
              This website introduces our software development business. It is a public information
              site. It does not create an account, sell a product, or accept orders. We may change,
              pause, or remove the site at any time.
            </p>
          </section>

          <section id="use">
            <h2>Acceptable use</h2>
            <p>You may browse the site for information about KBCoding. You may not:</p>
            <ul>
              <li>disrupt the site, or try to gain access to systems that host it</li>
              <li>use the site to send spam, malware, or unlawful material</li>
              <li>scrape the site in a way that degrades it for other visitors</li>
              <li>present the site, or portions of it, as your own</li>
            </ul>
          </section>

          <section id="ip">
            <h2>Intellectual property</h2>
            <p>
              The text, design, and marks on this website belong to us or to our licensors. You may
              share a link to a page. You may not copy the site’s design or republish its content
              for commercial use without written permission. Product names we mention, including
              names of other businesses we operate, remain their own marks.
            </p>
          </section>

          <section id="no-relationship">
            <h2>No client relationship</h2>
            <p>
              Visiting the site, or emailing us, does not make you a client and does not start a
              project. A project begins only when we agree to it in writing. Nothing on the site is
              legal, financial, or professional advice.
            </p>
          </section>

          <section id="links">
            <h2>Other sites</h2>
            <p>
              The site may link to other websites, including sites for products or for other
              business names we use. Those sites are separate. Their content and policies are their
              own, and these terms stop at this website.
            </p>
          </section>

          <section id="disclaimer">
            <h2>Disclaimer</h2>
            <p>
              The site is provided as-is. We work to keep it accurate, and we do not warrant that it
              will be uninterrupted, error-free, or fit for a particular purpose. Information can go
              out of date.
            </p>
          </section>

          <section id="liability">
            <h2>Liability</h2>
            <p>
              To the fullest extent the law allows, we are not liable for indirect, incidental, or
              consequential damages arising from your use of the site. Our total liability for a
              claim related to the site is limited to one hundred U.S. dollars. Some places do not
              allow these limits. Where that is true, they apply only as far as the law permits.
            </p>
          </section>

          <section id="law">
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Utah, without regard to conflict
              of law rules. Courts in Salt Lake County, Utah, are the venue for disputes about the
              site, unless the law requires otherwise.
            </p>
          </section>

          <section id="changes">
            <h2>Changes</h2>
            <p>
              We may update these terms. The effective date at the top of this page will change when
              we do. Continued use of the site after an update means you accept the revised terms.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              Questions about these terms:
              <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>
