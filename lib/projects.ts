import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  title: string;
  category: string;
  tech: string[];
  content: string;
  demo_url?: string;
  image_path?: string;
  show_home?: boolean;
};

export function getSortedProjectsData(): Project[] {
  // Create directory if it doesn't exist to avoid errors
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as any),
    } as Project;
  });

  return allProjectsData;
}

export function getProjectData(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as any),
  };
}

