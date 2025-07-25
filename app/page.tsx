"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Shield,
  Leaf,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  Play,
  CheckCircle,
  Droplets,
  Zap,
  Activity,
  MessageCircle,
  Instagram,
  ShoppingBag,
} from "lucide-react";

export default function KawibawaWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-amber-900">
                KAWIBAWA
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Kisah Kami
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Proses Panen
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                Kontak
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Program P2MW Innovation
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  KAWIBAWA
                </h1>
                <p className="text-2xl lg:text-3xl text-amber-700 font-light">
                  Kemurnian Madu Trigona untuk Kesehatan Anda yang Berharga
                </p>
                <p className="text-lg text-amber-600 leading-relaxed">
                  Rasakan keaslian madu trigona premium yang dipanen dengan
                  metode lestari, kaya akan propolis alami, dan diproduksi oleh
                  mahasiswa inovatif Indonesia.
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-amber-800">
                    100% Murni
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-amber-800">
                    Kaya Propolis
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-amber-800">
                    Panen Lestari
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg border border-amber-100">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-amber-800">
                    Inovasi Mahasiswa
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection("products")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Lihat Produk
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
                  onClick={() => scrollToSection("process")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Lihat Proses Panen
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/1.png"
                  alt="Madu Trigona KAWIBAWA"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
                Kisah Kami
              </h2>
              <p className="text-xl text-amber-700 leading-relaxed">
                Perjalanan KAWIBAWA dimulai dari semangat inovasi mahasiswa
                untuk menghadirkan kualitas madu trigona terbaik dengan
                nilai-nilai keberlanjutan dan kepercayaan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-amber-900">
                  Filosofi KAWIBAWA
                </h3>
                <p className="text-lg text-amber-700 leading-relaxed">
                  <strong className="text-amber-800">KAWIBAWA</strong> berasal
                  dari kata "wibawa" yang berarti kualitas yang berwibawa dan
                  terpercaya. Kami percaya bahwa produk berkualitas tinggi lahir
                  dari proses yang transparan, metode yang berkelanjutan, dan
                  dedikasi yang tulus.
                </p>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Sebagai bagian dari program P2MW (Program Pembinaan Mahasiswa
                  Wirausaha), KAWIBAWA mewujudkan semangat inovasi, ketekunan,
                  dan pemberdayaan generasi muda untuk menciptakan produk
                  unggulan Indonesia.
                </p>
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                  <Heart className="w-8 h-8 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Misi Kami</h4>
                    <p className="text-amber-700">
                      Menghadirkan madu trigona premium yang mendukung kesehatan
                      dan keberlanjutan alam
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="tim.png"
                  alt="Tim KAWIBAWA di Peternakan"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-amber-600" />
                    <span className="font-semibold text-amber-900">
                      Tim Mahasiswa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Proses Panen Kami
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Transparansi adalah kunci kepercayaan. Saksikan setiap langkah
              proses panen madu trigona KAWIBAWA yang higienis, lestari, dan
              menjaga kualitas premium.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Pemeliharaan Koloni
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Peternakan lebah trigona kami dikelola secara alami di
                  lingkungan yang asri dan bebas polusi. Setiap koloni dipantau
                  kesehatannya secara rutin untuk memastikan kualitas madu yang
                  optimal.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Lingkungan Alami & Bebas Pestisida
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Monitoring Kesehatan Koloni Rutin
                  </span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Peternakan Lebah Trigona"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Pengecekan Sarang
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Sarang lebah trigona yang unik terbuat dari propolis, bukan
                  lilin seperti lebah madu biasa. Tim kami melakukan pengecekan
                  berkala untuk memastikan kesehatan koloni dan kematangan madu.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Sarang Propolis Alami</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Pengecekan Kematangan Madu
                  </span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Sarang Lebah Trigona"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Panen Lestari
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Proses panen menggunakan alat sedot khusus yang higienis,
                  bukan dengan cara diperas. Metode ini menjaga kebersihan madu
                  dan tidak merusak struktur sarang untuk keberlanjutan koloni.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Metode Sedot Higienis</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Tidak Merusak Sarang</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Proses Panen Madu"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900">
                    Penyaringan & Pengemasan
                  </h3>
                </div>
                <p className="text-lg text-amber-700 leading-relaxed">
                  Madu disaring secara minimal untuk menjaga kandungan nutrisi
                  dan propolis alami. Proses pengemasan dilakukan dalam
                  fasilitas bersih dengan standar keamanan pangan yang ketat.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Penyaringan Minimal</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Standar Keamanan Pangan</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Penyaringan dan Pengemasan"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Keunggulan Madu Trigona
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Madu trigona memiliki karakteristik unik yang membuatnya istimewa
              dibandingkan madu biasa. Temukan manfaat luar biasa untuk
              kesehatan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Rasa Unik
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Karakter rasa asam-manis yang khas dengan aroma floral yang
                  lembut, memberikan pengalaman rasa yang berbeda dari madu
                  biasa.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Kaya Propolis
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Kandungan propolis dan antioksidan 3x lebih tinggi dari madu
                  biasa, memberikan perlindungan maksimal untuk sistem imun
                  tubuh.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Antibakteri Kuat
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Sifat antibakteri dan antiinflamasi yang kuat membantu proses
                  penyembuhan dan meningkatkan daya tahan tubuh secara alami.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Stamina & Vitalitas
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Meningkatkan stamina dan vitalitas tubuh, cocok sebagai
                  suplemen kesehatan harian untuk gaya hidup aktif.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Aman untuk Diabetes
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Indeks glikemik rendah membuatnya lebih aman untuk penderita
                  diabetes dibandingkan madu biasa atau pemanis lainnya.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Premium Quality
                  </h3>
                </div>
                <p className="text-amber-700 leading-relaxed">
                  Diproduksi dalam jumlah terbatas dengan kualitas premium,
                  menjadikannya pilihan eksklusif untuk kesehatan optimal.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Chart */}
          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">
              Perbandingan Madu Trigona vs Madu Biasa
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">3x</div>
                <div className="text-amber-800 font-medium">
                  Kandungan Propolis
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                <div className="text-amber-800 font-medium">Antioksidan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-amber-800 font-medium">
                  Indeks Glikemik Lebih Rendah
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Produk KAWIBAWA
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Pilih varian madu trigona premium yang sesuai dengan kebutuhan
              kesehatan Anda. Setiap botol diproduksi dengan standar kualitas
              tertinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/2.png"
                  alt="Madu Trigona 150g"
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain bg-white"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  Best Seller
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Madu Trigona Premium 150g
                </h3>
                <p className="text-amber-700 mb-4">
                  Ukuran ideal untuk konsumsi harian. Cocok untuk pemula yang
                  ingin merasakan manfaat madu trigona berkualitas premium.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-amber-600">(127 ulasan)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-amber-900">
                      Rp 36.000
                    </span>
                    <span className="text-sm text-amber-600 line-through ml-2">
                      Rp 45.000
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/3.png"
                  alt="Madu Trigona 500ml"
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain bg-white"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Family Pack
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Madu Trigona Premium 500ml
                </h3>
                <p className="text-amber-700 mb-4">
                  Ukuran keluarga yang ekonomis. Sempurna untuk konsumsi rutin
                  seluruh keluarga dengan nilai yang lebih menguntungkan.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-amber-600">(89 ulasan)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-amber-900">
                      Rp 122.000
                    </span>
                    <span className="text-sm text-amber-600 line-through ml-2">
                      Rp 130.000
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Special Offers */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 text-center mb-6">
              Penawaran Khusus
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Gratis Ongkir</h4>
                  <p className="text-green-700">
                    Untuk pembelian minimal Rp 300.000
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Garansi Kualitas</h4>
                  <p className="text-blue-700">
                    100% uang kembali jika tidak puas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Kontak & Pemesanan
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Hubungi kami untuk konsultasi produk, pemesanan khusus, atau
              pertanyaan seputar madu trigona KAWIBAWA.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">WhatsApp</h4>
                      <p className="text-amber-700">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Email</h4>
                      <p className="text-amber-700">info@kawibawa.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Alamat</h4>
                      <p className="text-amber-700">
                        Jl. Peternakan Lebah No. 123, Bogor, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Hubungi Kami Sekarang
                </h3>
                <div className="space-y-4">
                  {/* WhatsApp CTA */}
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Chat di WhatsApp
                  </Button>

                  {/* Instagram CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 py-4 text-lg bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/kawibawa.id/",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    Follow Instagram
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Beli di Marketplace
                </h3>
                <div className="space-y-4">
                  {/* Tokopedia */}
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg">
                    <ShoppingBag className="w-5 h-5 mr-3" />
                    Beli di Tokopedia
                  </Button>

                  {/* Shopee */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg">
                    <ShoppingBag className="w-5 h-5 mr-3" />
                    Beli di Shopee
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-amber-900" />
                </div>
                <span className="text-xl font-bold">KAWIBAWA</span>
              </div>
              <p className="text-amber-200">
                Madu trigona premium untuk kesehatan yang berwibawa dan
                terpercaya.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Madu Trigona 150g</li>
                <li>Madu Trigona 500g</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Tentang Kami</li>
                <li>Proses Panen</li>
                <li>Kualitas</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>
              &copy; 2024 KAWIBAWA. Semua hak dilindungi. Diproduksi dengan
              bangga oleh mahasiswa Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
