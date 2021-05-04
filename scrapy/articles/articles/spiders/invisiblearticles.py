# import scrapy

# class InvisibleSpider(scrapy.Spider):
#     name = "invisible_oranges"
#     start_urls = ["https://www.invisibleoranges.com/search/?s=articles"]

#     def parse(self, response):
#         links = response.xpath("//img/@src")
#         html = ""

#         for link in links:
#             url = link.get()

#             if any(extension in url for extension in [".jpg", ".gif", ".png"]):
#                 html += """<a href="{url}" 
#                         target="_blank">
#                         <img src="{url}" 
#                         height="33%"
#                         width="33%" />
#                         <a/>""".format(url=url)

#             with open("frontpage.html", "a") as page:
#                 page.write(html)
#                 page.close()

# class ExampleSpider(scrapy.Spider):
#     name = "invisible"
#     allowed_domains = ["https://www.invisibleoranges.com/"]
#     start_urls = ["https://www.invisibleoranges.com/"]
#     html=""

#     def parse(self, response):
#         pass

#     with open("frontpage.html", "a") as page:
#         page.write(html)
#         page.close()

import scrapy


class DSOSpider(scrapy.Spider):
    name = "dso"

    def start_requests(self):
        urls = [
            'http://www.bardomethodology.com/articles/2019/06/23/deathspell-omega-interview/',
        
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }        

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'bardio-interview-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
        'http://quotes.toscrape.com/page/2/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('span.small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }