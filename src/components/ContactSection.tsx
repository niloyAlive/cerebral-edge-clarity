import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = 'Contact from CerebralEdge Website';
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:solutions@cerebral-edge.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact
          </h2>
          <p className="text-base text-cerebral-text-gray">
            Ready to assess AI readiness or plan your Snowflake roadmap? Let's talk.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Request an Intro
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm text-gray-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1"
                  placeholder="What would you like to achieve?"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-cerebral-blue hover:bg-cerebral-blue/90 text-white py-2.5 text-sm font-medium rounded-md"
              >
                Send via Email
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-cerebral-text-gray">
                Send via Email{" "}
                <a 
                  href="mailto:solutions@cerebral-edge.com" 
                  className="text-cerebral-blue hover:underline"
                >
                  solutions@cerebral-edge.com
                </a>
              </p>
              <p className="text-xs text-cerebral-dark-gray mt-2">
                This simple form opens your email client. No data is stored on this site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;