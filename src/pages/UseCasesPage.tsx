
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/layout/PageLayout';
import { FileText, Target, Users } from 'lucide-react';
import axios from 'axios';
const UseCasesPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company_name: '',
    company_type: '',
    focus_area: '',
    website_or_linkedin: '',
    contact_person_name: '',
    contact_person_designation: '',
    mobile_number: '',
    email_id: '',
    use_case: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        await axios.post('http://localhost:3000/api/form/Problem_statements', formData);

        toast({
          title: "Use Case Submitted Successfully!",
          description: "We'll review your problem statement and get back to you soon.",
          variant: "default",
        });
        // Reset form
        setFormData({
          company_name: '',
          company_type: '',
          focus_area: '',
          website_or_linkedin: '',
          contact_person_name: '',
          contact_person_designation: '',
          mobile_number: '',
          email_id: '',
          use_case: ''
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
    // Simulate API call
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Use Cases</h1>
            <div className="text-xl text-gray-300 mb-8 space-y-4">
              <p className="italic">
                Having problems is not a problem.. Having solution is not the solution..
              </p>
              <p className="text-brand-orange font-semibold">
                Finding the right way to solve the problem to attain best solution, matters..
              </p>
              <p>
                CITIL is known to the world of engineers, industrials, researchers & entrepreneurs 
                for its technically skilled young engineers & entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-l-4 border-l-brand-purple">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-brand-purple">
                  <FileText className="h-6 w-6 mr-3" />
                  Important Instructions
                </h2>
                
                <div className="space-y-4 text-lg">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                    <p>Kindly fill the form with precision by providing accurate and necessary details.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                    <p>Ensure all mandatory fields are filled, using clear and legible text.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                    <p>Review your entries before submission to catch any errors.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Use Case Submission Form</CardTitle>
                <p className="text-center text-gray-600 mt-2">* Indicates required question</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company_name" className="text-base font-medium">Company Name *</Label>
                      <Input
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company_type" className="text-base font-medium">Company Type *</Label>
                      <Input
                        id="company_type"
                        name="company_type"
                        value={formData.company_type}
                        onChange={handleInputChange}
                        placeholder="e.g., Startup, SME, Enterprise, NGO"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="focus_area" className="text-base font-medium">Focus Area *</Label>
                      <Input
                        id="focus_area"
                        name="focus_area"
                        value={formData.focus_area}
                        onChange={handleInputChange}
                        placeholder="e.g., AI/ML, IoT, Healthcare, FinTech"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="website_or_linkedin" className="text-base font-medium">Website / LinkedIn link *</Label>
                      <Input
                        id="website_or_linkedin"
                        name="website_or_linkedin"
                        type="url"
                        value={formData.website_or_linkedin}
                        onChange={handleInputChange}
                        placeholder="https://company.com or LinkedIn URL"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Contact Person Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-brand-purple" />
                      Contact Person Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contact_person_name" className="text-base font-medium">Contact Person Name *</Label>
                        <Input
                          id="contact_person_name"
                          name="contact_person_name"
                          value={formData.contact_person_name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="contact_person_designation" className="text-base font-medium">Contact Person Designation *</Label>
                        <Input
                          id="contact_person_designation"
                          name="contact_person_designation"
                          value={formData.contact_person_designation}
                          onChange={handleInputChange}
                          placeholder="Job title/Position"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <Label htmlFor="mobile_number" className="text-base font-medium">Mobile Number *</Label>
                        <Input
                          id="mobile_number"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email_id" className="text-base font-medium">Email Id *</Label>
                        <Input
                          id="email_id"
                          name="email_id"
                          type="email"
                          value={formData.email_id}
                          onChange={handleInputChange}
                          placeholder="contact@company.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Use Case / Problem Statement */}
                  <div className="border-t pt-6">
                    <Label htmlFor="use_case" className="text-base font-medium">Use case/ Problem statement *</Label>
                    <p className="text-sm text-gray-600 mb-2">
                      Please describe your use case or problem statement in detail. Include the challenges you're facing and what kind of solution you're looking for.
                    </p>
                    <Textarea
                      id="use_case"
                      name="use_case"
                      value={formData.use_case}
                      onChange={handleInputChange}
                      placeholder="Describe your use case, problem statement, challenges, and the type of innovative solutions you're seeking..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-opacity-90 text-white py-3 text-lg font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Use Case...' : 'Submit Use Case'}
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

export default UseCasesPage;
