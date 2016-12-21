<div class="sidebar u-col-xs-6 u-col-md-3">
    <ul class="menu-component">
        {% for key in sidebar -%}
            <li>
                {{ loop.key }}
                {% for item in key -%}
                    <div class="menu-item">
                        {% if item.component!='' %}
                        <a href="/docs/{{item.component}}" {% if item.component==docId  %}class="selected"{% endif %}>
                            {% autoescape false %}
                                {{ loop.key|replace('([A-Za-z]+)','<span>$1</span>') }}
                            {% endautoescape %}
                        </a>
                        {% else %}
                            {% autoescape false %}
                                <label>{{ loop.key|replace('([A-Za-z]+)','<span>$1</span>') }}</label>
                            {% endautoescape %}
                        {% endif %}
                    </div>
                {%- endfor %}
            </li>
        {%- endfor %}
    </ul>
</div>
