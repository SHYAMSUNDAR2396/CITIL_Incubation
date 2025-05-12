
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/layout/PageLayout';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, inquiryType: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to connect with our team? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in our incubation programs, want to become a mentor, or looking to partner with us,
                we'd love to hear from you. Fill out the form or use our contact information below.
              </p>
              
              <div className="space-y-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-brand-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                        <p className="text-gray-600">
                          Chennai Institute of Technology<br />
                          Incubation Center, 3rd Floor, Innovation Block<br />
                          Sarathy Nagar, Kundrathur, Chennai - 600069<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-brand-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Call Us</h3>
                        <p className="text-gray-600">
                          Main Office: +91 44 1234 5678<br />
                          Programs Desk: +91 44 8765 4321<br />
                          WhatsApp: +91 98765 43210
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-brand-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Email Us</h3>
                        <p className="text-gray-600">
                          General Inquiries: incubate@citchennai.net<br />
                          Program Applications: programs@citincubate.net<br />
                          Partnerships: partners@citincubate.net
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-brand-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-brand-purple hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-brand-purple hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-brand-purple hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-brand-purple hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-brand-purple hover:text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-medium mb-2">Phone Number</label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="inquiryType" className="block font-medium mb-2">Inquiry Type</label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="program">Program Information</SelectItem>
                          <SelectItem value="application">Application Process</SelectItem>
                          <SelectItem value="mentorship">Become a Mentor</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="visit">Schedule a Visit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-purple hover:bg-opacity-90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto"></div>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-full h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.923188152555!2d80.07043281482219!3d12.978665990849034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xf30d9cb6e95c185e!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1651827000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CIT Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Find answers to commonly asked questions about our incubation center.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How can I apply for the incubation program?</h3>
                  <p className="text-gray-600">
                    You can apply by filling out the application form on the Programs page of our website or by reaching out to us via email at programs@citincubate.net.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do I need to be a CIT student to join the incubation program?</h3>
                  <p className="text-gray-600">
                    While CIT students and alumni receive priority, our programs are open to entrepreneurs from all institutions. We evaluate applications based on innovation potential and team strength.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What stage should my startup be at to apply?</h3>
                  <p className="text-gray-600">
                    We have programs for various stages - from idea validation (pre-incubation) to growth and scaling (acceleration). Choose the program that best matches your current stage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How can I become a mentor at the incubation center?</h3>
                  <p className="text-gray-600">
                    If you have industry expertise and are passionate about guiding startups, please email us your resume and areas of expertise at mentors@citincubate.net or use our contact form.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Subscribe to our newsletter to receive updates about events, opportunities, and startup success stories.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Enter your email"
              className="bg-white"
            />
            <Button className="bg-brand-purple hover:bg-opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
