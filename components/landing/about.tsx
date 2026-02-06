import { Section } from "@/components/landing/section";
import type { Messages } from "@/src/lib/messages";

/**
 * About Component (React Island)
 */
type Props = { messages: Messages["About"] };

export default function About({ messages }: Props) {
	return (
		<Section>
			<div className="ascii-frame w-full p-6 md:p-10">
				<div className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-[0.35em] mb-6">
					{messages.title}
				</div>
				<div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
					<div className="space-y-5 text-sm md:text-base text-zinc-300 uppercase tracking-[0.14em] leading-relaxed">
						<p>{messages.p1}</p>
						<p>{messages.p2}</p>
						<p className="text-zinc-500">{messages.p3}</p>
					</div>
					<div className="ascii-frame p-4 md:p-6">
						<div className="text-xs text-zinc-500 uppercase tracking-[0.3em] mb-4">
							/engage
						</div>
						<ul className="text-xs md:text-sm text-zinc-300 uppercase tracking-[0.18em] space-y-3">
							<li>response time: &lt; 48h</li>
							<li>deploy surface: web + internal</li>
							<li>alignment: founder-led</li>
						</ul>
						<div className="ascii-rule mt-6 pt-4">
							<a
								href="mailto:hello@ponti.io"
								className="text-xs uppercase tracking-[0.35em] text-white hover:text-zinc-300 transition-colors"
							>
								{messages.cta}
							</a>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
