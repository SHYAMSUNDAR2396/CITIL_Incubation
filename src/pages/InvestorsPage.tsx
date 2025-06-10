
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/layout/PageLayout';
import { TrendingUp, Target, DollarSign } from 'lucide-react';

const InvestorsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    investorName: '',
    mobileNumber: '',
    emailId: '',
    focusArea: '',
    fundSize: '',
    linkedInWebsite: '',
    companiesInvested: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Investor Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
        variant: "default",
      });
      // Reset form
      setFormData({
        investorName: '',
        mobileNumber: '',
        emailId: '',
        focusArea: '',
        fundSize: '',
        linkedInWebsite: '',
        companiesInvested: ''
      });
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investors</h1>
            <div className="text-xl text-gray-300 mb-8 space-y-4">
              <p className="text-brand-orange font-semibold">
                Find the right place, right domain, right trend and perfect startup to invest in.
              </p>
              <p>
                We are excited to collaborate with angel investors and private investors who share our passion 
                for fostering innovation and supporting high-potential startups. By partnering with CITIL, 
                you will gain access to a dynamic ecosystem of emerging companies, early-stage ventures, 
                and cutting-edge research, all while playing a key role in driving the growth of next-generation businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">Why Partner with CITIL?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg border-t-4 border-t-brand-purple">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">High-Potential Startups</h3>
                  <p className="text-gray-600">Access to carefully curated early-stage ventures with strong growth potential and innovative solutions.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-brand-orange">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Dynamic Ecosystem</h3>
                  <p className="text-gray-600">Be part of a thriving innovation ecosystem with access to cutting-edge research and emerging technologies.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-brand-blue">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
                  <p className="text-gray-600">Collaborate with Chennai Institute of Technology and gain access to top engineering talent and resources.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Investor Partnership Form</CardTitle>
                <p className="text-center text-gray-600 mt-2">* Indicates required question</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="investorName" className="text-base font-medium">Name of the investor *</Label>
                    <Input
                      id="investorName"
                      name="investorName"
                      value={formData.investorName}
                      onChange={handleInputChange}
                      placeholder="Enter investor name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="mobileNumber" className="text-base font-medium">Mobile Number *</Label>
                      <Input
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="emailId" className="text-base font-medium">Email ID *</Label>
                      <Input
                        id="emailId"
                        name="emailId"
                        type="email"
                        value={formData.emailId}
                        onChange={handleInputChange}
                        placeholder="investor@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="focusArea" className="text-base font-medium">Focus Area/ Domain *</Label>
                    <Input
                      id="focusArea"
                      name="focusArea"
                      value={formData.focusArea}
                      onChange={handleInputChange}
                      placeholder="e.g., AI/ML, FinTech, HealthTech, IoT, SaaS"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fundSize" className="text-base font-medium">Fund size *</Label>
                      <Input
                        id="fundSize"
                        name="fundSize"
                        value={formData.fundSize}
                        onChange={handleInputChange}
                        placeholder="e.g., $1M - $10M, ₹5Cr - ₹50Cr"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="companiesInvested" className="text-base font-medium">How many Companies have you invested in so far? *</Label>
                      <Input
                        id="companiesInvested"
                        name="companiesInvested"
                        type="number"
                        value={formData.companiesInvested}
                        onChange={handleInputChange}
                        placeholder="Number of companies"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="linkedInWebsite" className="text-base font-medium">LinkedIn ID/ Website of the company *</Label>
                    <Input
                      id="linkedInWebsite"
                      name="linkedInWebsite"
                      type="url"
                      value={formData.linkedInWebsite}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/investor or https://company.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-opacity-90 text-white py-3 text-lg font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Investor Application'}
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

export default InvestorsPage;
