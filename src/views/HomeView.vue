<script setup lang="ts">
import { site } from '@/data/site'

const practices = [
  {
    index: '01',
    title: 'Product software',
    copy: 'Applications and tools built to be used: a first version, then the releases that follow it.',
  },
  {
    index: '02',
    title: 'Web and mobile',
    copy: 'Sites, web apps, and mobile apps shaped around the job a person is trying to finish.',
  },
  {
    index: '03',
    title: 'Supporting systems',
    copy: 'APIs, data, accounts, and the operational pieces that keep software running after it ships.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Name the job',
    copy: 'Start from what the software has to do, and for whom, before the stack gets interesting.',
  },
  {
    num: '02',
    title: 'Build in pieces',
    copy: 'Ship working parts early enough that the product can be judged against real use.',
  },
  {
    num: '03',
    title: 'Leave it running',
    copy: 'Hand off software that can be maintained: clear structure, not a pile of unfinished parts.',
  },
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <p class="kicker">{{ site.tagline }}</p>
          <h1>Software, built as <em>its own</em> business.</h1>
          <p class="lede">
            KBCoding is the software development business we use to design and ship the products,
            tools, and systems we create. This site is the public front door: who we are, and the
            terms that cover a visit here.
          </p>
          <div class="actions">
            <RouterLink class="button" to="/about">About the studio</RouterLink>
            <RouterLink class="text-link" to="/terms">Read the terms</RouterLink>
          </div>
        </div>
        <dl class="facts">
          <div>
            <dt>Name</dt>
            <dd>{{ site.name }}</dd>
          </div>
          <div>
            <dt>Practice</dt>
            <dd>Software development</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{{ site.location }}</dd>
          </div>
          <div>
            <dt>This site</dt>
            <dd>Public front door</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="band section" aria-labelledby="work-heading">
      <div class="wrap">
        <div class="section-head">
          <h2 id="work-heading">What we make</h2>
          <p class="section-note">
            The work changes shape. The standard stays the same: software a person can understand and rely on.
          </p>
        </div>
        <div class="practices">
          <article v-for="item in practices" :key="item.index" class="practice">
            <span class="index">{{ item.index }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="method-heading">
      <div class="wrap">
        <div class="section-head">
          <h2 id="method-heading">How a project usually goes</h2>
        </div>
        <ol class="steps">
          <li v-for="step in steps" :key="step.num">
            <span class="num">{{ step.num }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.copy }}</p>
          </li>
        </ol>
      </div>
    </section>

    <div class="wrap">
      <div class="closing">
        <h2>One name for the software.</h2>
        <p>
          We also operate under other business names. Those names cover their own work and are not
          described here. If you arrived looking for KBCoding, this is the software practice.
        </p>
      </div>
    </div>
  </div>
</template>
