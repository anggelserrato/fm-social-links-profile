import avatar from '../assets/avatar-jessica.jpeg';

function SocialLinksProfile() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://www.github.com' },
    { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center text-white">
      <article className="flex w-[327px] flex-col items-center rounded-xl bg-card-grey-800 p-card-300 md:w-[384px] md:p-card-500">
        <figure>
          <img
            src={avatar}
            alt="Jessica Randall - Frontend developer profile picture"
            className="h-22 w-22 rounded-full"
          />
        </figure>
        <h1 className="pt-card-300 pb-card-50 text-2xl leading-[150%] font-semibold">
          Jessica Randall
        </h1>
        <p className="pb-card-300 text-sm leading-[150%] font-bold text-card-green">
          London, United Kingdom
        </p>
        <p className="pb-card-300 text-sm leading-[150%]">
          "Front-end developer and avid reader."
        </p>
        <nav aria-label="Social media links" className="w-full">
          <ul className="flex flex-col gap-card-200">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Jessica's profile on ${link.name}`}
                  className="block rounded-lg bg-card-grey-700 p-card-150 text-sm leading-[150%] font-bold transition-colors duration-300 hover:bg-card-green hover:text-card-grey-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}

export default SocialLinksProfile;
