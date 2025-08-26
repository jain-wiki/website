<template>
  <SectionWrapper id="difference" title="What Makes Us Different" wrapperClass="bg-gradient-to-b from-sky-50 to-white">
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <div class="space-y-4">
          <p class="text-gray-600">Other directories often rely on closed systems, manual approvals, and locked data.
            Jain Wiki flips that model.</p>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <Icon name="material-symbols:public" class="text-sky-500 text-2xl" />
              <div>
                <p class="font-medium">Open Contribution</p>
                <p class="text-sm text-gray-600">Anyone can add and improve entries without waiting for admin approval.
                </p>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="material-symbols:database" class="text-teal-500 text-2xl" />
              <div>
                <p class="font-medium">Built on Wikibase</p>
                <p class="text-sm text-gray-600">Same platform as Wikidata — structured, linked, queryable.</p>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="material-symbols:link" class="text-emerald-500 text-2xl" />
              <div>
                <p class="font-medium">Interoperable</p>
                <p class="text-sm text-gray-600">APIs & SPARQL queries allow developers and researchers to build new
                  tools.</p>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="material-symbols:travel-explore" class="text-cyan-500 text-2xl" />
              <div>
                <p class="font-medium">Dual Impact</p>
                <p class="text-sm text-gray-600">We enrich both Google Maps and our open database simultaneously.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white/70 backdrop-blur rounded-2xl p-8 border border-sky-100 shadow-sm">
        <h3 class="text-lg font-semibold mb-4 flex items-center">
          <Icon name="material-symbols:query-stats" class="text-sky-500 mr-2" /> Example Query
        </h3>
        <div class="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto">
          SELECT ?temple ?templeLabel WHERE {<br />
          &nbsp;&nbsp;?temple wdt:P31 wd:Q12345 ; # instance of Jain temple<br />
          &nbsp;&nbsp;wdt:P131 wd:Q11111 ; # located in Maharashtra<br />
          &nbsp;&nbsp;wdt:P571 ?inception .<br />
          &nbsp;&nbsp;FILTER(YEAR(?inception)
          < 1900)<br />
          } LIMIT 50
        </div>
        <p class="mt-4 text-sm text-gray-600">Structured data means powerful discovery and research.</p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
</script>
