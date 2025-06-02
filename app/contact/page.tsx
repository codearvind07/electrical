'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
    
      <section
  className="relative py-24 bg-gray-50 min-h-screen"
  style={{
    backgroundImage: "url('/contact.jpg')", // Replace with your local image path
    backgroundSize: "cover", // Ensures the image covers the entire section
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  }}
>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Contact Us</h1>
      <p className="text-lg text-orange-500">
        Have questions or need assistance? Reach out to us and we'll be happy to help.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Our Location */}
      <div
        className="p-6 rounded-lg shadow-md bg-white bg-opacity-80"
      >
        <div className="mb-4 text-orange-500">
          <MapPin className="h-12 w-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Our Location</h3>
        <p className="text-gray-600">
          Plot No. 145 & 146, Udyog Kendra 2,<br />
          Ecotech-3, Greater Noida,<br />
          201306
        </p>
      </div>

      {/* Email Us */}
      <div
        className="p-6 rounded-lg shadow-md bg-white bg-opacity-80"
      >
        <div className="mb-4 text-orange-500">
          <Mail className="h-12 w-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
        <p className="text-gray-600">
          <a
            href="mailto:dpelectrical85@gmail.com"
            className="hover:text-orange-500 transition-colors"
          >
            dpelectrical85@gmail.com
          </a>
        </p>
      </div>

      {/* Call Us */}
      <div
        className="p-6 rounded-lg shadow-md bg-white bg-opacity-80"
      >
        <div className="mb-4 text-orange-500">
          <Phone className="h-12 w-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
        <p className="text-gray-600">
          <a
            href="tel:9818144519"
            className="hover:text-orange-500 transition-colors"
          >
            +91 9818144519
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="number"
                      placeholder="Your Phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center">
                      Sending...
                      <svg className="ml-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4881698127284!2d77.5199716!3d28.5573216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3c09c30acf%3A0xaa0b96aaa2d2dfe2!2sEcotech%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651001234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DP Electricals Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}