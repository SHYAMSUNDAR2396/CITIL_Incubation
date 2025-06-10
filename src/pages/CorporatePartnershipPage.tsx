import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/layout/PageLayout';
import { Building2, Users, Lightbulb, Target } from 'lucide-react';
import axios from 'axios';

const CorporatePartnershipPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // id: Date.now(),
    email: '',
    company_name: '',
    industry_sector: '',
    location: '',
    contact_name: '',
    designation: '',
    mobile_number: '',
    contact_email: '',
    // partnership_opportunities: [],
    innovation_verticals: '',
    // submitted_at: new Date().toISOString()
  });

  const partnershipOptions = [
    'Ideathons/Hackathons',
    'Joint Incubation & Acceleration Programs for Startups',
    'Set up Specialised Centres of Excellence (COE) in partnership with CITIL',
    'Joint R&D and Technology Transfer',
    'Innovation solutions towards specific Problem Statements',
    'Internships',
    'Innovation Space',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleCheckboxChange = (option: string, checked: boolean) => {
  //   if (checked) {
  //     setFormData({
  //       ...formData,
  //       partnership_opportunities: [...formData.partnership_opportunities, option]
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       partnership_opportunities: formData.partnership_opportunities.filter(type => type !== option)
  //     });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // const fullData = {
    //   ...formData,
    //   id: Date.now().toString(),
    //   submitted_at: new Date().toISOString()
    // };

    try {
      await axios.post('http://localhost:3000/api/form/partnership_Application', formData);

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your partnership proposal and get back to you soon.",
        variant: "default"
      });

      setFormData({
        // id: Date.now(),
        email: '',
        company_name: '',
        industry_sector: '',
        location: '',
        contact_name: '',
        designation: '',
        mobile_number: '',
        contact_email: '',
        // partnership_opportunities: [],
        innovation_verticals: '',
        // submitted_at: new Date().toISOString()
      });

    } catch (error) {
      console.error("Form submission failed:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong while submitting the form.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Partnership Form</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-orange">CIT Catalyst</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Chennai Institute of Technology Innovation Labs to fuel innovation and solve industry challenges
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  CITIL (Chennai Institute of Technology Innovation Labs) associated with Chennai Institute of Technology, 
                  is looking forward to work with Corporates and Enterprises to connect them to student innovators. 
                  If you are looking to fuel innovation and solve pressing industry challenges in your organisation, 
                  partner with us to collaborate with innovative minds, support the growth of groundbreaking startups, 
                  and contribute to shaping the future of technology, business, and research.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-purple/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">6000+ Talented Students</h3>
                      <p className="text-gray-600">Access to the crème de la crème of aspiring engineering talent in Tamil Nadu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-purple/10 p-3 rounded-full">
                      <Building2 className="h-6 w-6 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">30+ Centers of Excellence</h3>
                      <p className="text-gray-600">State-of-the-art facilities and research centers at your disposal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Partnership Application Form</CardTitle>
                <p className="text-center text-gray-600 mt-2">* Indicates required question</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                    <Input
                      // id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      // required
                      className="mt-2"
                    />
                  </div>

                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName" className="text-base font-medium">Company Name *</Label>
                      <Input
                        // id="companyName"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        // required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="industry" className="text-base font-medium">Industry/Sector *</Label>
                      <Input
                        // id="industry"
                        name="industry_sector"
                        value={formData.industry_sector}
                        onChange={handleInputChange}
                        placeholder="e.g., Technology, Healthcare, Finance"
                        // required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-base font-medium">Location *</Label>
                    <Input
                      // id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State, Country"
                      // required
                      className="mt-2"
                    />
                  </div>

                  {/* Contact Person Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-brand-purple" />
                      Contact Person Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contactPersonName" className="text-base font-medium">Contact Person Name *</Label>
                        <Input
                          // id="contactPersonName"
                          name="contact_name"
                          value={formData.contact_name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          // required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="designation" className="text-base font-medium">Designation *</Label>
                        <Input
                          // id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          placeholder="Job title"
                          // required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <Label htmlFor="mobileNumber" className="text-base font-medium">Mobile Number *</Label>
                        <Input
                          // id="mobileNumber"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          // required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="emailId" className="text-base font-medium">Email ID *</Label>
                        <Input
                          // id="emailId"
                          name="contact_email"
                          type="email"
                          value={formData.contact_email}
                          onChange={handleInputChange}
                          placeholder="contact@company.com"
                          // required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Types */}
                  {/* <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-brand-purple" />
                      Partnership Opportunities *
                    </h3>
                    <p className="text-gray-600 mb-4">How does your organisation wish to partner with Chennai Institute of Technology Innovation Labs?</p>
                    
                    <div className="space-y-3">
                      {partnershipOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={formData.partnership_opportunities.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                          />
                          <Label htmlFor={option} className="text-sm font-normal cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* Innovation Verticals */}
                  <div>
                    <Label htmlFor="innovationVerticals" className="text-base font-medium">Innovation Verticals & Problem Statements</Label>
                    <p className="text-sm text-gray-600 mb-2">
                      Can you please tell us more about the innovation verticals or problem statements you want to collaborate with CITIL for?
                    </p>
                    <Textarea
                      // id="innovationVerticals"
                      name="innovation_verticals"
                      value={formData.innovation_verticals}
                      onChange={handleInputChange}
                      placeholder="Describe the specific areas of innovation, technologies, or challenges you'd like to work on together..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-opacity-90 text-white py-3 text-lg font-semibold" 
                    // disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Partnership Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CorporatePartnershipPage;
