<script setup lang="ts">
import { site } from '@/data/site'

const sections = [
  { id: 'who', title: 'Who we are' },
  { id: 'scope', title: 'What this covers' },
  { id: 'collect', title: 'Information' },
  { id: 'email', title: 'Email' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'sharing', title: 'Sharing' },
  { id: 'retention', title: 'Retention' },
  { id: 'children', title: 'Children' },
  { id: 'rights', title: 'Your choices' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
]
</script>

<template>
  <article class="page">
    <div class="wrap">
      <header class="page-head">
        <p class="kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p class="lede">
          This policy explains how {{ site.name }} handles information on {{ site.url }}. The site
          is a public front door. It does not ask you to create an account.
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
          <section id="who">
            <h2>Who we are</h2>
            <p>
              {{ site.legalName }} is a software development business based in {{ site.location }}.
              For privacy questions about this website, contact
              <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
            </p>
          </section>

          <section id="scope">
            <h2>What this covers</h2>
            <p>
              This policy covers this website only. Other business names we operate, and software
              products we publish, may have their own sites and their own policies. If you use one
              of those, read the policy published there.
            </p>
          </section>

          <section id="collect">
            <h2>Information</h2>
            <p>
              We do not run accounts, checkout, or a contact form on this site, and we do not ask
              you to submit personal information to browse it.
            </p>
            <p>
              Like most websites, the service that hosts the site may keep technical logs of
              requests. Those logs can include your IP address, the date and time, the page
              requested, and basic browser information. Hosts use that information to deliver the
              site and to keep it secure. We do not use those logs to build a marketing profile.
            </p>
          </section>

          <section id="email">
            <h2>Email</h2>
            <p>
              If you email {{ site.email }}, we receive the address you write from and whatever you
              put in the message. We use that only to read and reply, and to keep a record of the
              conversation if we need it. Please do not send sensitive information in an unsolicited
              email.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies</h2>
            <p>
              This website does not set advertising cookies and does not use a third-party analytics
              service. Your browser may still store ordinary technical data required to load the
              pages. If that changes, we will update this policy before the change takes effect.
            </p>
          </section>

          <section id="sharing">
            <h2>Sharing</h2>
            <p>
              We do not sell personal information. We do not share visitor information with
              advertisers. We may disclose information if the law requires it, or to a hosting
              provider solely so the site can operate.
            </p>
          </section>

          <section id="retention">
            <h2>Retention</h2>
            <p>
              Hosting logs are kept for as long as the host’s ordinary operations require, and then
              deleted or rolled off in the host’s normal course. Email we receive is kept while the
              conversation is active and for a reasonable period afterward, then deleted when we no
              longer need it.
            </p>
          </section>

          <section id="children">
            <h2>Children</h2>
            <p>
              This website is not directed at children under 13, and we do not knowingly collect
              personal information from them. If you believe a child has emailed us, write to
              {{ site.email }} and we will delete the message.
            </p>
          </section>

          <section id="rights">
            <h2>Your choices</h2>
            <p>
              You can browse the site without giving us your name. If you have emailed us and want
              that message deleted, ask us at
              <a :href="`mailto:${site.email}`">{{ site.email }}</a>
              and we will do so unless we have to keep it for a legal reason. Depending on where you
              live, you may have additional rights to access or delete personal information. We will
              honor a request that applies to data we actually hold.
            </p>
          </section>

          <section id="changes">
            <h2>Changes</h2>
            <p>
              If we change this policy, we will post the new version on this page and update the
              effective date. The version on the site is the one that applies.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              {{ site.name }}<br />
              {{ site.location }}<br />
              <a :href="`mailto:${site.email}`">{{ site.email }}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>
