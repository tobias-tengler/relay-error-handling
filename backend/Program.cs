var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddCors()
    .AddGraphQLServer()
    .ModifyOptions(o =>
    {
        o.EnableTrueNullability = true;
    })
    .AddTypes();

var app = builder.Build();

app.UseCors(b => b.AllowCredentials().AllowAnyHeader().AllowAnyMethod().SetIsOriginAllowed(_ => true));

app.MapGraphQL();

app.RunWithGraphQLCommands(args);

[QueryType]
public static class Query
{
    public static Book GetBook() => new("C# in depth.");
}

public record Book(string Title)
{
    public Author GetAuthor() => new();
}

public class Author
{
    public string GetName()
    {
        throw new Exception("Failed to load name...");

        return "Jon Skeet";
    }
}