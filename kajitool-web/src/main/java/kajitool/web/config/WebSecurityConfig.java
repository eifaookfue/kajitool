package kajitool.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        // withHttpOnlyFalse()とすることでJavaScriptからCookieに保存されているXSRF-TOKENにアクセスできるようになり、
        // Swager-UIもこのトークンをリクエストに含めることができる
        http.csrf().csrfTokenRepository(
                CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and().exceptionHandling()
                .authenticationEntryPoint(((request, response, authException) -> {
                    // SPAとの連携を考慮し、認証エラー時は302ではなく401を返すようにする
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                }))
                .and().oauth2Login()
                // SPAとの連携を考慮し、認証成功時のURLは固定にする
                .defaultSuccessUrl("/", true)
                .and().authorizeRequests()
                .mvcMatchers(HttpMethod.POST, "/api/**/*").authenticated()
                .mvcMatchers(HttpMethod.PUT, "/api/**/*").authenticated()
                .mvcMatchers(HttpMethod.DELETE, "/api/**/*").authenticated()
                .mvcMatchers("/api/v1/account").authenticated()
                .anyRequest().permitAll();

        // https://stackoverflow.com/questions/43794721/spring-boot-h2-console-throws-403-with-spring-security-1-5-2
/*
        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/h2-console/**").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();
*/
    }
}
