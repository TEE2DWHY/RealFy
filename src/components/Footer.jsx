const Section = ({ title, children }) => {
  return (
    <div className="font-sans flex flex-col leading-10">
      <h1 className="font-bold">{title}</h1>
      {children}
    </div>
  );
};

const LinkItem = ({ title }) => {
  return <span className="opacity-50 cursor-pointer">{title}</span>;
};

const Footer = () => {
  return (
    <>
      <footer className="my-10 px-16">
        <div className="flex justify-between">
          {/* Branding */}
          <div className="w-1/5">
            <a href="#" className="text-blue-600 font-bold">
              REALFY.
            </a>
            <p className="opacity-50 text-sm">
              Our vision is to provide people with a satisfying experience for
              their money.
            </p>
          </div>
          {/* About */}
          <Section title="About">
            <LinkItem title="About Us" />
            <LinkItem title="Features" />
            <LinkItem title="News & Blog" />
          </Section>

          {/* Company */}
          <Section title="Company">
            <LinkItem title="How We Work?" />
            <LinkItem title="Capital" />
            <LinkItem title="Security" />
          </Section>

          {/* Support */}
          <Section title="Support">
            <LinkItem title="FAQs" />
            <LinkItem title="Support Center" />
            <LinkItem title="Contact Us" />
          </Section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
