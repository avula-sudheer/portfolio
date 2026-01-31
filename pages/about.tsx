import { Star } from 'lucide-react'

export default function About() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <Star className="w-6 h-6" />
        <h2 className="text-2xl font-semibold">About Me</h2>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="mt-6 text-lg font-semibold">Early Foundations</h3>
          <p className="mt-2 secondary-text">Growing up as the eldest child taught me <strong>responsibility</strong>, <strong>resilience</strong>, and <strong>independence</strong> very early. I learned to be <strong>exploratory</strong>, take initiative, and maintain a sense of ownership in everything I do. Those early roles shaped the foundation of how I approach challenges today.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">Defining Moments</h3>
          <p className="mt-2 secondary-text">A few key experiences had an outsized impact on my mindset:</p>
          <ul className="mt-2 list-disc list-inside pl-4 secondary-text">
            <li>Losing my baggage and passport on the day of my GRE exam taught me <strong>accountability</strong> in the most practical way.</li>
            <li>Being denied entry into a technical entrance exam due to low grades was disappointing, but it forced me to become <strong>self-motivated</strong> and <strong>confident</strong> in my own strengths.</li>
          </ul>
          <p className="mt-2 secondary-text">These challenges strengthened my discipline and shaped my ability to push forward even when the path is unclear.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">Curiosity That Became a Career</h3>
          <p className="mt-2 secondary-text">My love for engineering started with a love for <strong>logic</strong>. Math fascinated me, and the rush of <strong>solving problems</strong> naturally evolved into exploring computer science. Around the same time, the global buzz around the Y2K problem highlighted the real-world impact engineers could make. That convergence set me firmly on the path toward <strong>Computer Science Engineering</strong>.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">Growth Through Exploration</h3>
          <p className="mt-2 secondary-text">I started my career as an intern who asked more questions than most people had patience for. But that <strong>curiosity</strong> became my accelerant.</p>
          <p className="mt-2 secondary-text">Along the way, I learned:</p>
          <ul className="mt-2 list-disc list-inside pl-4 secondary-text">
            <li>to dig deep using the 80–20 rule,</li>
            <li>to embrace mistakes as learning tools,</li>
            <li>and to constantly refine not just solutions, but the way I thought about problems.</li>
          </ul>
          <p className="mt-2 secondary-text">These habits later became central to my engineering leadership style.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">From Building Features to Designing Systems</h3>
          <p className="mt-2 secondary-text">Over the years, my work evolved from writing code to architecting <strong>large-scale</strong>, secure, <strong>high-performance</strong> platforms. I've worked across:</p>
          <ul className="mt-2 list-disc list-inside pl-4 secondary-text">
            <li>distributed systems</li>
            <li>endpoint security</li>
            <li>data protection & tokenization</li>
            <li>cloud platforms</li>
            <li>enterprise UI/UX and human-factor driven design</li>
          </ul>
          <p className="mt-2 secondary-text">My focus expanded from fixing problems to <strong>creating systems</strong> that prevent them.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">Leadership Through Clarity and Empathy</h3>
          <p className="mt-2 secondary-text">As I began leading teams, I realized that the strongest form of <strong>leadership</strong> is enabling others. I lead with:</p>
          <ul className="mt-2 list-disc list-inside pl-4 secondary-text">
            <li>clarity over pressure,</li>
            <li>curiosity over authority,</li>
            <li>and consistency over heroics.</li>
          </ul>
          <p className="mt-2 secondary-text">I mentor engineers the same way I grew with space to ask questions, explore, and develop <strong>confidence</strong>.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">Personal Turning Point</h3>
          <p className="mt-2 secondary-text">A pivotal moment in my personal life was learning about the challenges my child may face. What initially crushed me eventually inspired a shift in <strong>purpose</strong> motivating me to stay active, <strong>empathetic</strong>, and intentional about how I use my skills to make life easier for others.</p>
          <p className="mt-2 secondary-text">This experience strengthened my desire to build technology that <strong>genuinely</strong> helps people facing difficulties, seen or unseen.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">A Life of Many Roles</h3>
          <p className="mt-2 secondary-text">Beyond engineering, I've grown through many roles: Son, Sibling, Spouse, Parent, Relative, Student, Friend, Mentor, Neighbor. Each role has taught me:</p>
          <ul className="mt-2 list-disc list-inside pl-4 secondary-text">
            <li>patience</li>
            <li>humility</li>
            <li>emotional intelligence</li>
            <li>gratitude</li>
          </ul>
          <p className="mt-2 secondary-text">These values guide how I collaborate, solve problems, and lead teams.</p>
        </div>

        <div>
          <h3 className="mt-6 text-lg font-semibold">What Drives Me Today</h3>
          <p className="mt-2 secondary-text">I'm driven by a simple principle: build systems, solutions, and teams that truly make an impact. Whether it's improving security, shaping reliable distributed systems, guiding engineers, or designing thoughtful user experiences — I care about work that improves <strong>people's lives</strong>.</p>
        </div>
      </div>

      <div className="mt-6">
        <a href="/contact" className="px-4 py-2 bg-slate-900 text-white rounded">Get in touch</a>
      </div>
    </section>
  )
}
