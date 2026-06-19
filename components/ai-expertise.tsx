export default function AIExpertise() {
  return (
    <section
      data-parallax-section
      className="relative overflow-hidden border-b border-border bg-surface/80 backdrop-blur-sm"
    >
      <div
        data-parallax-bg
        className="parallax-glow parallax-glow--right"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-grid">
          <div data-parallax-sticky className="lg:sticky lg:top-24 lg:self-start">
            <span data-parallax-line className="parallax-line" aria-hidden="true" />
            <p className="section-label">AI</p>
            <h2 className="section-title">Practical use, not hype.</h2>
          </div>

          <div data-parallax-reveal className="space-y-8">
            <p className="max-w-2xl text-sm leading-[1.7] text-text-secondary">
              I use AI where it solves a clear problem — saving time, improving
              a workflow, or making data easier to use. The aim is production
              software, not a demo that never ships.
            </p>

            <dl data-parallax-stagger className="divide-rows max-w-2xl">
              <div
                data-parallax-item
                className="grid gap-1 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm text-text-primary">Integration</dt>
                <dd className="text-sm text-text-secondary">
                  GPT, Claude, LLama, and other models in existing products with
                  sensible guardrails.
                </dd>
              </div>
              <div
                data-parallax-item
                className="grid gap-1 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm text-text-primary">Automation</dt>
                <dd className="text-sm text-text-secondary">
                  Document handling, data extraction, internal support
                  workflows.
                </dd>
              </div>
              <div
                data-parallax-item
                className="grid gap-1 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm text-text-primary">Knowledge</dt>
                <dd className="text-sm text-text-secondary">
                  Search over your own data with RAG and vector storage where
                  needed.
                </dd>
              </div>
              <div
                data-parallax-item
                className="grid gap-1 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm text-text-primary">Strategy</dt>
                <dd className="text-sm text-text-secondary">
                  Working out where AI is worth the effort — and where it is
                  not.
                </dd>
              </div>
            </dl>

            <p className="max-w-2xl border-l-2 border-accent/40 pl-4 font-mono text-xs leading-relaxed text-text-muted">
              OpenAI · Claude · LangChain · vector DBs · RAG · fine-tuning ·
              prompt engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
