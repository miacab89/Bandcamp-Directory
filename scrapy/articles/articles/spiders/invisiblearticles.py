import scrapy

class InvisibleSpider(scrapy.Spider):
    name = "invisible_oranges"
    start_urls = ["https://www.invisibleoranges.com/search/?s=articles"]

    def parse(self, response):
        links = response.xpath("//img/@src")
        html = ""

        for link in links:
            url = link.get()

            if any(extension in url for extension in [".jpg", ".gif", ".png"]):
                html += """<a href="{url}" 
                        target="_blank">
                        <img src="{url}" 
                        height="33%"
                        width="33%" />
                        <a/>""".format(url=url)

            with open("frontpage.html", "a") as page:
                page.write(html)
                page.close()

class ExampleSpider(scrapy.Spider):
    name = "invisible"
    allowed_domains = ["https://www.invisibleoranges.com/"]
    start_urls = ["https://www.invisibleoranges.com/"]
    html=""

    def parse(self, response):
        pass

    with open("frontpage.html", "a") as page:
        page.write(html)
        page.close()