import {ArrowUpRight, Download, Mail} from 'lucide-react';
import {profile} from './content';
import styles from './contact-section.module.css';

function BrandIcon({kind}:{kind:'github'|'linkedin'}) {
  return kind==='github'?<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.11-.28-.49-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.66.12 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.09 5.48.4.35.76 1.02.76 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>:<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.97V9.2h2.96v9.55ZM6.45 7.89a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.86h-2.96V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.49V9.2h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.56 1.97 3.56 4.53v5.27Z"/></svg>;
}
export default function ContactSection(){return <section id="contact" className={`section ${styles.contact}`}>
  <div className={styles.intro}><span className="eyebrow">LET'S CONNECT</span><h2>Have something<br/>in <em>mind?</em></h2><p>A project, an opportunity, or just a hello.<br/>I'd love to hear from you.</p><a className={styles.resume} href="/resume.pdf" download="Janit-Berwal-Resume.pdf"><Download size={17}/>Download resume</a></div>
  <div className={styles.links}>
    <a className={styles.link} href={'mailto:'+profile.email}><span className={styles.icon}><Mail size={24}/></span><span className={styles.details}><span className={styles.label}>Email</span><span className={styles.value}>{profile.email}</span></span><ArrowUpRight className={styles.arrow} size={21}/></a>
    <a className={styles.link} href={profile.github} target="_blank" rel="noreferrer"><span className={styles.icon}><BrandIcon kind="github"/></span><span className={styles.details}><span className={styles.label}>GitHub</span><span className={styles.value}>See what I'm building</span></span><ArrowUpRight className={styles.arrow} size={21}/></a>
    <a className={styles.link} href={profile.linkedin} target="_blank" rel="noreferrer"><span className={styles.icon}><BrandIcon kind="linkedin"/></span><span className={styles.details}><span className={styles.label}>LinkedIn</span><span className={styles.value}>Let's connect professionally</span></span><ArrowUpRight className={styles.arrow} size={21}/></a>
  </div>
</section>}
